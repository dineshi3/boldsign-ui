import axios from "axios";

export default function handler(req, res) {
  const config = {
    method: 'post',
    url: `${process.env.ELASTICSEARCH_HOST}/libra_lead/_doc`,
    data: {
      ...req.body,
      timestamp: new Date().getTime(),
      createdAt: new Date().toLocaleString()
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(process.env.ELASTICSEARCH_AUTH).toString('base64')}`,
    },
  };
  axios(config)
    .then(function (response) {
      res.status(200).json({ status: true, message: 'Success' });
    })
    .catch(function (error) {
      console.error('Error:', error);
      res.status(500).json({ status: false, message: error.message });
    });
}
