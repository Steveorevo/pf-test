/**
 * This code is machine generated.
 */
module.exports = function(RED) {
  var pf = RED.settings.functionGlobalContext.get("publishflows");
  if (typeof pf == "undefined") pf = [];
  pf.push(
    {
      "subflows": [
        {
          "name": "Test Subflow",
          "id": "4ee0eb04.6e6e84",
          "checked": "checked"
        }
      ],
      "tabs": [
        {
          "label": "Flow 1",
          "id": "8b02f513.12b4f8",
          "checked": ""
        }
      ],
      "path": __dirname,
      "publishFlows": [
        "test1"
      ]
    }
  );
  RED.settings.functionGlobalContext.set("publishflows", pf);
};
