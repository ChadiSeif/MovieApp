import QuietPlace from "./../Assets/QuietPlace.jpg";
import Misfits from "./../Assets/Misfits.jpg";
import FatherHood from "./../Assets/Fatherhood.jpg";
import Luca from "./../Assets/Luca.jpg";
import Censor from "./../Assets/Censor.jpg";
import Gaia from "./../Assets/Gaia.jpg";

const MoviesData = [
  {
    Title: "A Quiet Place Part II",
    Description: `Following the events at home, the Abbott family now face the terrors of the outside world`,
    PosterURL: QuietPlace,
    Rating: 3,
  },
  {
    Id: Math.random(),
    Title: "The Misfits",
    Description: `renowned criminal Richard Pace finds himself caught up in an elaborate 
              gold heist `,
    PosterURL: Misfits,
    Rating: 2,
  },
  {
    Id: Math.random(),
    Title: "Fatherhood",
    Description: `A father brings up his baby girl as a single dad after the
               unexpected death of his wife who died a day after their daughter's birth.`,
    PosterURL: FatherHood,
    Rating: 4,
  },
  {
    Id: Math.random(),
    Title: "Luca",
    Description: `On the Italian Riviera, an unlikely but strong friendship
               grows between a human being and a sea monster disguised as a human.`,
    PosterURL: Luca,
    Rating: 4,
  },
  {
    Id: Math.random(),
    Title: "Censor",
    Description: `After viewing a strangely familiar video nasty, Enid, a film censor,
                 sets out to solve the past mystery of her sister's disappearance.`,
    PosterURL: Censor,
    Rating: 3,
  },
  {
    Id: Math.random(),
    Title: "Gaia",
    Description: `On a surveillance mission in a primordial forest, a park ranger
     encounters two survivalists following a post-apocalyptic lifestyle.`,
    PosterURL: Gaia,
    Rating: 5,
  },
];

export default MoviesData;
