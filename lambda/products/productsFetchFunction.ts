import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    return new Promise(async (resolve) => {
        const method = event.httpMethod
        const lambdaRequestId = context.awsRequestId
        const apiRequestId = event.requestContext.requestId

        console.log(`API Gateway RequestId: ${apiRequestId} - Lambda RequestId: ${lambdaRequestId}`)

        if(event.resource === '/products') {
            if( method === 'GET' ){
                console.log('GET - /products')
    
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({
                        message: 'GET Products - OK'
                    })
                }) 
            }
    
            resolve({
                statusCode: 400,
                body: JSON.stringify({
                    message: 'Bad request'
                })
            })  
        }
    })
}