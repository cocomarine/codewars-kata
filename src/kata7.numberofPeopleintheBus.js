var number = function(busStops){
    let pplinBus = 0;
    for(let i = 0; i < busStops.length ; i++) {
      pplinBus += busStops[i][0] - busStops[i][1];
    };
    return pplinBus;
  }