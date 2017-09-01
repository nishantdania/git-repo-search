export const formatData = (data) => {
  var pruned = {};
  pruned.count = data.total_count < 1000 ? data.total_count : 1000;
  pruned.items = [];
  data.items.map((item) => {
    var result = {  
      full_name: item.full_name,
      description: item.description,
      language: item.language,
      followers: item.watchers_count,
      url: item.url
    }
    pruned.items.push(result);
  })
  return pruned;
}
