/* eslint-disable prettier/prettier */
export default {
  fieldefs: [
    { name: "name", gp: "profile", tbsort: 1, type: "text", validate: "required" },
    { name: "account", gp: "profile", tbsort: 1, type: "text", validate: "required" },
    { name: "country", tbsort: 1, gp: "profile", type: "select", candidates: window.MEApp.countries, validate: "required" },
    { name: "create_time", tbsort: 1, gp: "profile", type: "date", validate: "required" },
    { name: "phone", gp: "contact_info", type: "text" },
    { name: "birthday", gp: "contact_info", type: "date" },
    { name: "address", gp: "contact_info", type: "textarea", rows:3 },
    { name: "hobbies", gp: "contact_info", type: "selections", candidates: window.MEApp.hobbielist },
    { name: "remark", gp: "contact_info", type: "textarea" }
  ],
  sections: [
    { name: "profile", routename: "route.info", type: "WSimpleFragment" },
    { name: "contact_info", routename: "route.info", type: "WSimpleFragment" }
  ]
};
