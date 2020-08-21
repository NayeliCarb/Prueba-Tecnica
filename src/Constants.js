
export const GRAPHQL_API = 'https://api.spacex.land/graphql/';

export const TITLE = "Space X";

export const GET_CHARACTERS = `
  query getCharacters {
    launchesPast {    
        mission_name
        launch_date_local
        links {
            article_link
            wikipedia
            flickr_images
        }  
        launch_success 
    }
  }
 `;

 