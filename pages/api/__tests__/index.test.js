const getFirstTicketTitle = require('./index');
const axios = require('axios');

jest.mock('axios');

it('returns the first ticket', async () => {
  axios.get.mockResolvedValue({
    "tickets": [
        {
            "url": "https://zccticketshelp.zendesk.com/api/v2/tickets/1.json",
            "id": 1,
            "external_id": null,
            "via": {
                "channel": "sample_ticket",
                "source": {
                    "from": {},
                    "to": {},
                    "rel": null
                }
            },
            "created_at": "2021-08-01T21:08:10Z",
            "updated_at": "2021-08-01T21:08:10Z",
            "type": "incident",
            "subject": "Sample ticket: Meet the ticket",
            "raw_subject": "Sample ticket: Meet the ticket",
            "description": "Hi Utibeno,\n\nThis is your first ticket. Ta-da! Any customer request sent to your supported channels (email, chat, voicemail, web form, and tweet) will become a Support ticket, just like this one. Respond to this ticket by typing a message and clicking Submit. You can also see how an email becomes a ticket by emailing your new account, support@zccticketshelp.zendesk.com. Your ticket will appear in ticket views.\n\nThat's the ticket on tickets. If you want to learn more, check out: \nhttps://support.zendesk.com/hc/en-us/articles/203691476\n",
            "priority": "normal",
            "status": "open",
            "recipient": null,
            "requester_id": 1901312860745,
            "submitter_id": 1515133391302,
            "assignee_id": 1515133391302,
            "organization_id": null,
            "group_id": 1900000275085,
            "collaborator_ids": [],
            "follower_ids": [],
            "email_cc_ids": [],
            "forum_topic_id": null,
            "problem_id": null,
            "has_incidents": false,
            "is_public": true,
            "due_at": null,
            "tags": [
                "sample",
                "support",
                "zendesk"
            ],
            "custom_fields": [],
            "satisfaction_rating": null,
            "sharing_agreement_ids": [],
            "fields": [],
            "followup_ids": [],
            "ticket_form_id": 1900000123045,
            "brand_id": 1900000072065,
            "allow_channelback": false,
            "allow_attachments": true
        },
    ]
  });

  const title = await getFirstTicketTitle();
  expect(title).toEqual('Sample ticket: Meet the ticket');
});
