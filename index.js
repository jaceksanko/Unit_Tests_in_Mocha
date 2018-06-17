const formatDate = timeInSeconds => {
  if (timeInSeconds === null || timeInSeconds === undefined || timeInSeconds === 0) {
    return `0s`
  }
  else if (timeInSeconds <= 60) {
    return `${timeInSeconds}s`;
  } 
  else if (timeInSeconds > 60 && timeInSeconds <= 3600) {
    if (timeInSeconds % 60 === 0) {
      return `${Math.trunc(timeInSeconds / 60)}m`;
    }
    return `${Math.trunc(timeInSeconds / 60)}m ${timeInSeconds % 60}s`;
  } 
  else if (timeInSeconds > 3600) {
    if (timeInSeconds % 3600 === 0) {
      return `${Math.trunc(timeInSeconds / 3600)}h`;
    }
    if ((timeInSeconds % 3600) % 60 === 0) {
      return `${Math.trunc(timeInSeconds / 3600)}h ${Math.trunc(
        (timeInSeconds % 3600) / 60,
      )}m`;
    }
    if ((timeInSeconds % 3600) <60) {
      return `${Math.trunc(timeInSeconds / 3600)}h ${(timeInSeconds % 3600) % 60}s`;
    }
    return `${Math.trunc(timeInSeconds / 3600)}h ${Math.trunc(
      (timeInSeconds % 3600) / 60,
    )}m ${(timeInSeconds % 3600) % 60}s`;
  }
};

module.exports = formatDate;
