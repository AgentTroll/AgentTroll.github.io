function disqus(doc) {
  var disqus_shortname = 'agenttrolldude';
  var dsq = doc.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (doc.getElementsByTagName('head')[0] || doc.getElementsByTagName('body')[0]).appendChild(dsq);
}