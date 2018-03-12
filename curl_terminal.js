curl -X POST -H "Content-Type: application/json" -d '{
   "persistent_menu":[
      {
         "locale":"default",
         "composer_input_disabled":false,
         "call_to_actions":[
            {
               "type":"postback",
               "title":"🏠 Accueil",
               "payload":"RETOUR_ACCUEIL"
            },
            {
               "type":"postback",
               "title":"📝 exemple2",
               "payload":"XXXXXX"
            },
            {
              "type":"web_url",
              "title":"exemple lien",
              "url":"https://www.google.com/",
              "webview_height_ratio":"full"
            }
         ]
      },
      {
         "locale":"zh_CN",
         "composer_input_disabled":false
      }
   ]
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=XXXXXX"


curl -X POST -H "Content-Type: application/json" -d '{
  "setting_type":"greeting",
  "greeting":{
    "text":"Bienvenue {{user_first_name}}. Ceci est le texte de présentation à changer (160 caractères max) ...."
  }
}' "https://graph.facebook.com/v2.6/me/thread_settings?access_token=XXXXXX"


curl -X POST -H "Content-Type: application/json" -d '{
  "get_started":{
    "payload":"BONJOUR"
  }
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=XXXXXX"
