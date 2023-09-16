import React from 'react'

const generateLink = (data) => {
    
    const template = `
    https://nostra-live.glance.com/public/content/assets/xiaomi/horizontalGCv2/index.html
    ?slugid=${data.slugId}
    &playerType=${data.videoSource}
    &channel=${data.channelName}
    &userid=$USER_ID
    &videoUrl=https%3A%2F%2Fcdn.live.glance.com%2Fastral%2FgdcGaming%2Findex.html
    &videoId=${data.videoId}
    &videoOrientation=portrait
    &streamUrl=&openAdInNewWindow=true&oem=xiaomi&env=production
    &packageName=&gameName=${encodeURIComponent(data.gameName)}
    &channelLogo=${data.channelLogo}
    &streamerName=${encodeURIComponent(data.streamerName)}
    &pwaV=GC1.MosaicV90&impId=$IMP_ID
    &webPageId=GCLive
    &title=${encodeURIComponent(data.videoTitle)}
    `.replace(/\n\s+/g, '');
         
  return template;
}



function LinkApp() {
  
    const linkData = {
         "id": "5f534832-777a-4faf-8d25-aec3276c6a5e",
         "videoId": "HaDxeyNc3Wn",
         "videoTitle": "Bantai ke saath hoga BGMI me dhamal! 🎮😆",
         "videoUrl": "",
         "videoUrls": [
             {
                 "language": "English",
                 "videoUrl": "Tx5sZ2Fj0a"
             }
         ],
         "gameName": "BGMI",
         "videoThumbnail": "https://storage.googleapis.com/glance-asset-store-sg/public/gamecenter/assets/HaDxeyNc3Wn/videoThumbnail/BANTAI BGMI.webp",
         "channelName": "27bf17dc-a1da-44a0-aa3b-b103b7764266",
         "channelLogo": "https://storage.googleapis.com/glance-asset-store-sg/public/gamecenter/assets/2070843c-336e-11ed-a261-0242ac120002/profileImg/bantai.jpg",
         "subscriberCount": 0,
         "videoLikeCount": 0,
         "videoViewCount": 0,
         "videoDuration": "00:00:00",
         "priorityScore": 1,
         "liveFrom": 1693276200,
         "liveTill": 1693285200,
         "geographiesTargeted": {
             "regions": [
                 "IN"
             ],
             "cities": [],
             "states": []
         },
         "videoStatus": "listed",
         "videoSource": "LIVE",
         "sectionId": "1",
         "sectionName": "LIVE",
         "liveBroadcastContent": null,
         "slugId": "battlegrounds-mobile-india-46762",
         "enableInstallCta": false,
         "gameData": "",
         "streamerName": "Bantai Baba",
         "isPortrait": false
     };
  
    const generatedLink = generateLink(linkData);
  
    return (
      <div>
        <p>Generated Link:</p>
        <a href={generatedLink} target="_blank" rel="noopener noreferrer">
          {generatedLink}
        </a>
      </div>
    );
  }
  
  export default LinkApp;














  