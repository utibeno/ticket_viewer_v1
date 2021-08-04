import Head from "next/head";
import styles from "../styles/Home.module.css";
import Ticket from "../components/Ticket";
import Link from "next/link";
import Error from "./_error";

export default function Home({errorCode, tickets }) {
  console.log(tickets[0].subject);
 
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Zendesk Tickets</title>
        <meta name="Tickets" content="zendesk, tickets" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tickets</h1>

        <p className={styles.description}>shows a list of available tickets</p>

        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            description={ticket.description}
            name={ticket.subject}
          />
        ))}

        <Link href="/page2">
          <a className={styles.a}>Next</a>
        </Link>

      </main>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const url = `https://zccticketshelp.zendesk.com/api/v2/tickets.json?page=1&per_page=25`;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append(
    "Authorization",
    "Basic dWVrcG91ZG9tM0BnbWFpbC5jb206RWtwb3Vkb20jMTE="
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const res = await fetch(url, requestOptions);
  const errorCode = res.ok ? false : res.statusCode;

  if (errorCode) {
    res.statusCode = errorCode;
  }

  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      tickets: data.tickets,
      previous_page: data.previous_page,
      next_page: data.next_page,
      errorCode,
    },
  };
};