import FB from 'fbgraph';
import Promise from 'bluebird';
import { facebookApi } from '../config';

const graph = Promise.promisifyAll(FB);

graph.setAccessTokenAsync(facebookApi.appToken);
graph.setVersionAsync('2.9');

const batchData = ids => {
    const gatherResources = kind => {
        return graph.batchAsync(
            ids.map(id => ({ method: 'get', relative_url: `${id}/${kind}` }))
        );
    };
    const postMetaData =
        '?fields=story,message,created_time,description,from,link,full_picture&locale=pl_PL';
    const likesData = 'likes?fields=id&summary=total_count';

    return Promise.all([
        gatherResources(postMetaData),
        gatherResources(likesData)
    ]).then(result => {
        const posts = result[0].map(item => JSON.parse(item.body));
        const likes = result[1].map(item => JSON.parse(item.body));

        return posts.map((post, i) => {
            post.likes = likes[i].summary.total_count;

            return post;
        });
    });
};

const getData = () => {
    const url = '293169260696126/feed';

    return graph.getAsync(url).then(({ data }) => {
        const ids = data.map(post => post.id);

        return batchData(ids).then(result => {
            return graph
                .getAsync('293169260696126', { fields: 'picture.type(small)' })
                .then(({ picture }) => {
                    return result.map(post => {
                        post.userIcon = picture.data.url;
                        return post;
                    });
                });
        });
    });
};

export default getData;
