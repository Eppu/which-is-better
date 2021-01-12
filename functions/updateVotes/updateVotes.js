// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const Airtable = require('airtable');

// Airtable connection config
Airtable.configure({
 endpointUrl: process.env.AIRTABLE_API_URL,
 apiKey: process.env.AIRTABLE_API_KEY
});
let base = Airtable.base(process.env.AIRTABLE_CLIENT_ID);

const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.id;
    let currentVotes = 0;

    // Retrieve record because Airtable can't increment without it
    base('things').find(subject, function(err, record) {
        if (err) { console.error(err); return; }
        currentVotes = record.get('votes');
        console.log('Current votes:', currentVotes);
        // Update votecount
        // TODO: Improve error handling
        base('things').update([
          {
            "id": subject,
            "fields": {
              "votes": currentVotes + 1
            }
          }
        ], function(err, records) {
          if (err) {
            console.error(err);
            return { statusCode: 422, body: err };
          }
          records.forEach(function(record) {
            console.log(`Updated ${record.get('name')} to ${record.get('votes')} votes.`);
          });
        });
        });
  
    // Return after done
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      },
      body: JSON.stringify({ message: `Updating votecount for ${subject}` }),
    }
  // Catch any errors
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
