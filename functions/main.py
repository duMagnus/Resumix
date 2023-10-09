from firebase_functions import https_fn
from firebase_functions.params import StringParam
from firebase_admin import initialize_app
from flask import jsonify
import openai

app = initialize_app()

openai.api_key = StringParam("OPEN_AI_API_KEY").value


@https_fn.on_request()
def transcribeAndSummarize(req: https_fn.Request) -> https_fn.Response:
    audio_file = req.files["recording"]
    audio_file.save("recording.m4a")

    data = open("recording.m4a", "rb")
    transcript = openai.Audio.transcribe(
        model="whisper-1", file=data, response_format="text", language="pt"
    )

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": """Leia a transcrição a seguir e resuma em uma lista de pontos relevantes em português, tente manter o número de pontos ao mínimo. Retorne apenas um objeto json contendo: 
                'title' (um título bem curto de no máximo 10 palavras pro resumo) e 'summary' (o resumo). Por exemplo: {'title': 'A história do computador', 'summary': 'O computador foi criado em...'}""",
            },
            {"role": "user", "content": transcript},
        ],
    )

    response = completion.choices[0].message.content

    responseData = eval(response)
    responseData["transcription"] = transcript

    return jsonify(responseData)
