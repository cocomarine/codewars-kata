function ballCollector(detritus) {
    let sac = detritus.filter(x => x === 58);
    return { weight:58*sac.length };
  }