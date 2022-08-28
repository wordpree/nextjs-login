const altCommentByName = (comments, name, newComment) => {
  if (!name || !newComment) return;
  if (!comments) {
    return [{ name, comment: [newComment] }];
  }
  const comment = comments.find((c) => c.name === name);

  if (comment) {
    const ret = comments.reduce((prev, curr) => {
      let tempEle = {};
      if (curr.name === name) {
        tempEle = { ...curr, comment: [...curr.comment, newComment] };
      } else {
        tempEle = curr;
      }
      return [...prev, { ...tempEle }];
    }, []);
    return ret;
  } else {
    return [...comments, { name, comment: [newComment] }];
  }
};

const getRandomNum = (max = 4) => {
  return Math.floor(Math.random() * max);
};

export { altCommentByName, getRandomNum };
