export default {
  fields: [
    { name: "name", gp: "profile", tbsort: 1, type: "txt" },
    { name: "spec", gp: "spec", tbsort: 2 },
    { name: "name", gp: "order", tbsort: 1 },
    { name: "description", gp: "order" },
    { name: "description", gp: "customer", tbsort: 2, type: "txtarea" }
  ],
  sections: [
    { name: "profile", routename: "route.info", type: "WSimpleFragment" },
    { name: "spec", routename: "route.info", type: "WSimpleFragment" },
    { name: "order", routename: "route.info", type: "WSimpleFragment" },
    { name: "customer", routename: "route.info", type: "WSimpleFragment" }
  ]
};
