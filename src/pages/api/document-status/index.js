import axios from 'axios';

export default async function handler(req, res) {
  try {
    const requestConfig = {
      method: 'get',
      url: `${process.env.BOLDSIGN_API_HOST}/v1/document/list`,
      headers: {
        'X-API-KEY': process.env.BOLDSIGN_API_KEY,
      },
      params: {
        Page: 1,
        PageSize: 5,
        Status: req.query.status,
      },
    };
    const response = await axios.request(requestConfig);
    res.status(200).json(response.data);
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response;

      let message = data;
      if (typeof data === 'object') {
        if (data.errors) message = JSON.stringify(data.errors);
        else message = JSON.stringify(data);
      }
      res.status(status).json({ status: false, message, data: data });
    } else {
      res.status(500).json({ status: false, message: error.message });
    }
  }
}
