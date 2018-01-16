import FB from 'fbgraph';
import Promise from 'bluebird';
import {facebookApi} from '../config';

const graph = Promise.promisifyAll(FB);

graph.setAccessTokenAsync(facebookApi.appToken);
graph.setVersionAsync('2.9');

const batchData = (ids) => {
    const gatherResources = (kind) =>{
        return graph.batchAsync(ids.map(id => ({ method: 'get', relative_url: `${id}/${kind}` })));
    };
    const postMetaData = '?fields=story,properties,permalink_url,message,created_time,description,from,link,picture';
    return gatherResources(postMetaData).then((result) => result.map((item) => JSON.parse(item.body)));
};

const getData = () => {
    const url = '293169260696126/feed';

    return graph.getAsync(url).then(({data}) => {
        console.log(data);
        const ids = data.map((post) => post.id);
        return batchData(ids);
    });
};

export default getData;
