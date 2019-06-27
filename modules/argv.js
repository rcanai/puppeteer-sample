module.exports = () => {
  // 0=nodeと1=ファイル名なので2要素目から取得する
  if (Array.isArray(process.argv)) {
    return process.argv.slice(2, process.argv.length)
  } else {
    return []
  }
};
