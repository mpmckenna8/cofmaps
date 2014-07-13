exports.serveCSS = function(res,sty)
{
  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Content-Length', Buffer.byteLength(sty));
  res.end(sty);
};
