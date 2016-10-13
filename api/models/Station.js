/**
 * Stations.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    station: {
      type: 'string',
      required: true
    },
    
    stationName: {
      type: 'string',
      required: true
    },
    
    description: {
      type: 'string'
    },
    
    demonstrator: {
      type: 'string'
    }
 
  }
};