var getOneRequest = function createGetOneRequest({id}) {
    return {
        method: 'get',
        url: `/species/${id}`
    };
};

export default getOneRequest;