from boto.opsworks.layer1 import OpsWorksConnection

command = "execute_recipes"
opsworks = OpsWorksConnection()
stackName = u'CIC-InnovationService01'

# set deploymentCommand
deploymentCommand = {
   'Name': '%s' % command
}
deploymentCommand['Name'] = 'execute_recipes'
deploymentCommand['Args'] = {"recipes":["git::sync_tech-info"]}

# get stackId
desc_stacks = opsworks.describe_stacks()
stackId = u'None'
   for loop in desc_stacks[u'Stacks']:
      if loop[u'Name'] == stackName:
         stackId = loop[u'StackId']
   if stackId == u'None':
      print ("Error: stackName not found")

# execute recipes
opsworks.create_deployment(stack_id = stackId, command = deploymentCommand )

