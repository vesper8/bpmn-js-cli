"use strict";

function PropertiesCommand(params, modeling) {
  return {
    args: [params.element("element"), params.string("properties")],
    exec: function (element, properties) {
      modeling.updateProperties(element, properties);
    },
  };
}

PropertiesCommand.$inject = ["cli._params", "modeling"];

module.exports = PropertiesCommand;
