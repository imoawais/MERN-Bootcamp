let arr = [
    {name: 'AWAIS'},
    {name: 'AWAIs'},
    {name: 'AWAis'},
    {name: 'AWais'},
    {name: 'Awais'}
  ];
  
  let nameToFind = 'Awais';
  let foundName = arr.find(function(obj){
    return obj.name.toLowerCase() === nameToFind.toLowerCase();
  });
  console.log(foundName);
  
  let nameToFindLast = 'is';
  let foundNameLast = arr.find(function(obj){
    return obj.name.toLowerCase().endsWith(nameToFindLast.toLowerCase());
  });
  console.log(foundNameLast);
  