/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_SMALLCONNECTIONSAWS_ARN
	STORAGE_SMALLCONNECTIONSAWS_NAME
Amplify Params - DO NOT EDIT */

/* region and table name available in comments of lambda function */
const region = process.env.STORAGE_SMALLCONNECTIONSAWS_ARN
const ddb_table_name = process.env.STORAGE_SMALLCONNECTIONSAWS_NAME

const AWS = require('aws-sdk')
const uuid = require('uuid/v4')
const docClient = new AWS.DynamoDB.DocumentClient({region})

// update the /products "get" and "post" endpoints
 
app.get('/businesses', async function(req, res) {
  try {
    var params = {
      TableName: ddb_table_name,
    }
    const data = await docClient.scan(params).promise()
    res.json({
      data: data
    })
  } catch (err) {
    res.json({
      error: err
    })
  }
})

app.post('/businesses', async function(req, res) {
  const { body } = req
  try {
    const input = { ...body, id: uuid() }
    var params = {
      TableName: ddb_table_name,
      Item: input
    }
    await docClient.put(params).promise()
    res.json({
      success: 'item saved to database..'
    })
  } catch (err) {
    res.json({
      error: err
    })
  }
})