from openai import OpenAI
from flask import Flask ,redirect,request,render_template,jsonify
import os
app=Flask(__name__)
@app.route('/')
def main():
    return render_template('index.html')
client=OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
@app.route('/chat',methods=['POST'])
def method():
    data=request.get_json()
    user_msg=data.get('message')

    infer=client.chat.completions.create(
        model='gpt-4o-mini',
        messages=[{'role':'user','content':user_msg}]
    )
    boat_reply=infer.choices[0].message.content
    return jsonify({'replay':boat_reply})

if __name__=='__main__':
    app.run(debug=True,host='0.0.0.0')
