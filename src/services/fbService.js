import FB from 'fb';
import {facebookApi} from '../config';

FB.options({
    accessToken: facebookApi.appToken,
    appId: facebookApi.appId,
    appSecret: facebookApi.appSecret
});

const batchData = (ids) => {
    const gatherResources = (kind) =>{
        return FB.api('', 'post', {
            batch: ids.map(id => ({ method: 'get', relative_url: `${id}/${kind}` }))
        });
    };
    const postMetaData = '?fields=story,properties,permalink_url,message,created_time,description,from,link,picture';
    return gatherResources(postMetaData).then((result) => result.map((item) => JSON.parse(item.body)));
};

const getData = () => {
    const url = '293169260696126/feed';

    return FB.api(url).then(({data}) => {
        const ids = data.map((post) => post.id);
        return batchData(ids);
    });
};

export default getData;
