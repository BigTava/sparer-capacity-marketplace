import json
import os

import requests
from app.exceptions import ErrorGeneratingText


def call_prompt(input: str):
    url = "https://egrgbdt5yfhe8xdw.us-east-1.aws.endpoints.huggingface.cloud"
    access_token = os.getenv("HUGGING_FACE_ACCESS_TOKEN")
    
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    data = {
        "inputs": input
    }
    response = requests.post(url, headers=headers, data=json.dumps(data))

    match response.status_code:
        case 200:
            return response.json()[0]["generated_text"]

        case 401:
            raise ErrorGeneratingText


async def ask_feedback(order: str):
    input = """Do you have enough information to match this order schema?
             Please answer yes or no following the explanation."""
    order_schema = json.load(open(os.path.join("static", "order_schema.json")))
    input = input + "The schema is" + str(order_schema) + "The order is" + order

    return call_prompt(input)


async def run_in_bacalhau(order: str):
    input = f"""Choose the supplier that best matches this order.
            Order: {order}.
            Suppliers:
            {str(json.load(open(os.path.join("static",
                                             "order_schema.json"))))}"""

    return call_prompt(input)
