// // {
// //     meta: {
// //       success: true,
// //       totalCount: 4155,
// //       pageCount: 208,
// //       currentPage: 1,
// //       perPage: 20,
// //     }
// //     result: [
      
// //     ]
// //   }


// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
// import Ticket from '../components/Ticket';
// import React, { useState, useEffect } from 'react';
// import ReactPaginate from 'react-paginate';
// import Router, { withRouter } from 'next/router'


// var url = "https://zccticketshelp.zendesk.com/api/v2/tickets.json?page[size]=25";

// export default function Home({ tickets }) {

//   // async function getNextData() {

//   //     const res = await fetch(url, requestOptions());
//   //     const data = await res.json();
    
//   //     if (data.meta.has_more) {
//   //       url = data.links.next;
//   //       getStaticProps(url);
//   //     } else {
//   //       getStaticProps(url);
//   //     }
//   //   };
    
//   //   async function getPrevData() {
    
//   //     const res = await fetch(url, requestOptions);
//   //     const data = await res.json();
    
//   //     if (data.meta.has_more) {
//   //       url = data.links.prev;
//   //       getStaticProps(url);
//   //     } else {
//   //       getStaticProps(url);
//   //     }
//   //   };
    
//   console.log(tickets[0].subject);

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Zendesk Tickets</title>
//         <meta name="Tickets" content="zendesk, tickets" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Tickets
//         </h1>

//         <p className={styles.description}>
//           shows a list of available tickets
//         </p>

//         {tickets.map((ticket) => (
//           <Ticket key={ticket.id}
//             description={ticket.description}
//             name={ticket.subject}
//           />
//         ))}

//         {/* <button onClick={getPrevData} disabled={!url}>PREV</button>
//         <button onClick={getNextData()}>NEXT</button> */}
//       </main>
//     </div>
//   )
// }


// export const getStaticProps = async (url) => {

//   // var url = `https://zccticketshelp.zendesk.com/api/v2/tickets.json?page=2&per_page=25`

//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "text/plain");
//   myHeaders.append("Authorization", "Basic dWVrcG91ZG9tM0BnbWFpbC5jb206RWtwb3Vkb20jMTE=");

//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };

//   const res = await fetch(url, requestOptions);
//   const data = await res.json();

//   // while (url) {
//   //     const res = await fetch(url, requestOptions);
//   //     const data = await res.json();
//   //   data.forEach(element => {
//   //     url = element.links.next
//   //     console.log(url)
//   //   });
//   // }

//     if (!data) {
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false,
//         },
//       }
//     }

//     return {
//       props: { 
//         tickets: data.tickets,
//         next_page: data.next_page,
//         previous_page: data.previous_page
//        }
//     }

//   }
// // }

