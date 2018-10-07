pf-test
=======

An example PublishFlows project with a published subflow.

### About

This example Node-RED project uses the
[node-red-contrib-publishflows](http://github.com/steveorevo/node-red-contrib-publishflows)
node to depict how to share a simple subflow for use in other Node-RED projects.

To use this project in your own projects, install the
[node-red-contrib-publishflows](http://github.com/steveorevo/node-red-contrib-publishflows)
node and list this project as a [dependency](https://nodered.org/docs/user-guide/projects/#project-dependencies)
from your Project Settings panel:

```
{
    "pf-test": "steveorevo/pf-test#master"
}
```

Followed by clicking the ["merge publishflows"](https://github.com/Steveorevo/node-red-contrib-publishflows#user-content-using-the-example-scenario-test-subflow-in-your-project)
button. After clicking the button, you should have a the subflow called "Test Subflow" in your project.

