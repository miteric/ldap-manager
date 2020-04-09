/* eslint-disable no-undef */
import Vue from "vue";
export const eventBus = new Vue();

export default {
  data: function() {
    return { curitem: "" };
  },
  created: function() {},
  methods: {
    // eslint-disable-next-line no-unused-vars
    onCurFileItem: function(item, event) {
      this.curitem = item;
    },
    // eventBus calls
    onFileChange: function(e) {
      // console.log('API onFileChange');
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }

      let file = files[0];
      if (file.size > 1024 * 1024 * 10) {
        alert("The file size can not exceed 10 MB.");
        return;
      }

      eventBus.$emit("clearAppMsgpan");
      eventBus.$emit("showFileForm", file);
      e.target.value = "";
    },
    showImg: function(url) {
      eventBus.$emit("showImageViewer", this.getUrlpath(url));
    },
    // rest calls
    restPost: function(url, formdata, callback, errcallback) {
      eventBus.$emit("showAppUpdating");
      var vm = this;
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post(url, formdata)
        .then(function(response) {
          eventBus.$emit("showAppSuccess", vm.$lang.update_success);
          if (callback) {
            callback(response);
          }
        })
        .catch(function(error) {
          // console.log(error);
          if (error.response.status == 401) {
            // window.location.href = MEApp.baseurl;
            location.reload();
          } else {
            eventBus.$emit("showAppError", error.response.data);
            if (errcallback) {
              errcallback(error.response.data);
            }
          }
        });
    },
    miltiPartPost: function(url, formdata, callback, errcallback) {
      eventBus.$emit("showAppUpdating");
      var vm = this;
      axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
      axios
        .post(url, formdata)
        .then(function(response) {
          eventBus.$emit("showAppSuccess", vm.$lang.update_success);
          if (callback) {
            callback(response);
          }
        })
        .catch(function(error) {
          // console.log(error);
          if (error.response.status == 401) {
            // window.location.href = MEApp.baseurl;
            location.reload();
          } else {
            eventBus.$emit("showAppError", error.response.data);
            if (errcallback) {
              errcallback(error.response.data);
            }
          }
        });
    },
    restPut: function(url, formdata, callback, errcallback) {
      eventBus.$emit("showAppUpdating");
      var vm = this;
      axios.defaults.headers.put["Content-Type"] = "application/json";
      axios
        .put(url, formdata)
        .then(function(response) {
          eventBus.$emit("showAppSuccess", vm.$lang.update_success);
          if (callback) {
            callback(response);
          }
        })
        .catch(function(error) {
          // console.log(error);
          if (error.response.status == 401) {
            // window.location.href = MEApp.baseurl;
            location.reload();
          } else {
            eventBus.$emit("showAppError", error.response.data);
            if (errcallback) {
              errcallback(error.response.data);
            }
          }
        });
    },
    restDel(url, callback) {
      eventBus.$emit("showAppUpdating");
      var vm = this;
      axios.defaults.headers.delete["Content-Type"] = "application/json";
      axios
        .delete(url)
        .then(function(response) {
          eventBus.$emit("showAppSuccess", vm.$lang.update_success);
          if (callback) {
            callback(response);
          }
        })
        .catch(function(error) {
          // console.log(error);
          if (error.response.status == 401) {
            // window.location.href = MEApp.baseurl;
            location.reload();
          } else {
            eventBus.$emit("showAppError", error.response.data);
            if (errcallback) {
              errcallback(error.response.data);
            }
          }
        });
    },
    restGet: function(url, callback) {
      eventBus.$emit("showAppUpdating");
      axios.defaults.headers.get["Content-Type"] = "application/json";
      axios
        .get(url)
        .then(function(response) {
          eventBus.$emit("clearAppMsgpan");
          if (callback) {
            callback(response);
          }
        })
        .catch(function(error) {
          // console.log(error);
          if (error.response.status == 401) {
            // window.location.href = MEApp.baseurl;
            location.reload();
          } else {
            eventBus.$emit("showAppError", error.response.data);
          }
        });
    },
    getUrlpath: function(path) {
      return MEApp.baseurl + path;
    },
    formatCurrency: function(value) {
      if (value) {
        return "$ " + value.toLocaleString();
      } else {
        return "";
      }
    }
  },
  filters: {
    // not working
    // formatlog(comment) {
    //   if (comment.startsWith('!#')) {
    //     var idx = comment.indexOf(':');
    //     return vm.getMsgByString(comment.substring(2, idx)) + comment.substring(idx);
    //   } else {
    //     return comment;
    //   }
    // }
  }
};
