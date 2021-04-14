const path = require('path');
const fs = require('fs/promises');
const axios = require('axios');

const uri = 'http://jsonplaceholder.typicode.com/posts/1';

const run = async uri => {
  try {
    const post = await axios.get(uri);
    const data = JSON.stringify(post.data)

    await fs.writeFile(path.resolve(__dirname, 'result/post.json'), data, 'utf-8');
  } catch (error) {
    console.error('an error occured', error.message);
  }
};

(async uri => {
  await run(uri);
})(uri);
