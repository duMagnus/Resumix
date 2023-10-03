import * as FileSystem from "expo-file-system";

export const sendAudioToCloudFunction = (audioUri) => {
  try {
    const formData = new FormData();
    formData.append("recording", {
      uri: FileSystem.documentDirectory + "recordings/" + `${audioUri}`,
      name: "audioRecording",
      type: "audio/m4a",
    });

    return fetch(
      "https://us-central1-resumix-3cad4.cloudfunctions.net/transcribeAndSummarize",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      }
    ).then((response) => {
      if (response.status > 200) {
        return Promise.reject("Something went wrong. Please try again later.");
      }
      return response.json();
    });
  } catch (error) {
    console.error("Erro durante o envio do arquivo de áudio:", error);
  }
};
