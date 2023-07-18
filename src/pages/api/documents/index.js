import axios from 'axios';

export default async function handler(req, res) {
  const { size = '10' } = req.query;
  const start = req.query.start && parseInt(req.query.start) > 0 ? req.query.start : '10';
  try {
    const requestConfig = {
      method: 'get',
      url: `${process.env.BOLDSIGN_API_HOST}/v1/document/list`,
      headers: {
        'X-API-KEY': process.env.BOLDSIGN_API_KEY,
      },
      params: {
        PageSize: size,
        Page: parseInt(start) / parseInt(size),
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
