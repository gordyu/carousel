
// - GET -
const getAllHomeInfos = (propertyId) => {
    const query = `SELECT * FROM home.homeInfo WHERE propertyId = ? `;
      return client.execute(query, [propertyId], { prepare: true });
    }
    
    
    // // - POST -
    const insertHomeInfo = params => {
      const query = `INSERT INTO home.homeInfo (
        propertyId, imageURL, description)
        VALUES (?, ?,  ?);`;
      return client.execute(query, params, { prepare: true });
    };
    
    // - PUT -
    const editHomeInfo = paramsObj => {
      const query = `UPDATE home.homeInfo SET ${Object.keys(paramsObj.request)[0]} = ${paramsObj.request.homeInfo_body} WHERE propertyId = ${paramsObj.propertyId} ;`;
      return  client.execute(query);
    };
    
    // // - DELETE - 
    const deleteHomeInfo = params => {
      const query = `DELETE FROM home.homeInfo WHERE propertyId = ?;`;
      return client.execute(query, [params.propertyId], { prepare: true });
    };
    
    module.exports = {
        getAllHomeInfos,
        insertHomeInfo,
        editHomeInfo,
        deleteHomeInfo
    }