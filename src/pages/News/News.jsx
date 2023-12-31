import dateFormat from "dateformat";
import { useEffect } from "react";
import {
    NewsSection, HeroTitle, NewsList, NewsSearchForm, SearchInputNews, NewsCardContainer, NewsCardTopLine, NewsCardImage, NewsCardContentWrapper, NewsCardTextWrapper, NewsCardTitle, NewsCardSubTitle, NewsCardFooter,
    NewsCardFooterDate, NewsCardFooterLink
} from "./NewsStyled";

const data = [
    {
    "imgUrl": "https://www.nytimes.com/images/2023/04/16/magazine/16mag-LOR/16mag-LOR-blog480.jpg",
    "title": "What I Learned Dogsitting for New York City’s Opulent Elite",
    "text": "In a city of yawning class inequality, some side hustles let you glimpse how the other half lives.",
    "date": "2023-04-11T09:00:18+0000",
    "url": "https://www.nytimes.com/2023/04/11/magazine/dogsitting-rich-new-york.html",
    "id": "nyt://article/8d29f1fc-d146-509d-8ceb-5a5b17d7886b"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/04/04/multimedia/00VIRTUAL-VETS-01b-fmzk/00VIRTUAL-VETS-01b-fmzk-blog480.jpg",
    "title": "The Virtual Vet Will See You Meow",
    "text": "Veterinary telemedicine could help more pet owners access much-needed care and put anxious animals at ease, but challenges remain.",
    "date": "2023-04-07T09:00:46+0000",
    "url": "https://www.nytimes.com/2023/04/07/health/vet-pet-health-telemedicine.html",
    "id": "nyt://article/992f2f7f-793c-5553-b722-348625f53a4b"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/04/04/travel/00tripped-up-illo/00tripped-up-illo-blog480.jpg",
    "title": "Help! My Dog Was Rejected by the Airline Because of a Carrier Rule That Doesn’t Exist.",
    "text": "A gate agent suddenly objected to a canine who’d flown previously on the same route, saying the carrier wasn’t big enough. Our columnist tries to sort out what the actual rules for pets on planes are.",
    "date": "2023-04-05T09:00:24+0000",
    "url": "https://www.nytimes.com/2023/04/05/travel/airlines-flying-with-dogs-cats.html",
    "id": "nyt://article/08d32cd1-6eb4-50f7-8126-f7bad37b098f"
  },
  {
    "imgUrl": "https://media4.giphy.com/media/h52OM8Rr5fLiZRqUBD/giphy.gif",
    "title": "On Pets, Moral Logic and Love",
    "text": "I didn’t think I was a dog person. Then Herbie showed up and taught me a lesson about love.",
    "date": "2023-03-19T13:00:06+0000",
    "url": "https://www.nytimes.com/2023/03/19/opinion/pets-dogs-love.html",
    "id": "nyt://article/0dc54659-a8a1-589a-bac8-f4d8321b0f43"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/03/15/nyregion/NY-FISH/NY-FISH-blog480.jpg",
    "title": "When Helpless Fish Need a Hero, She Answers the Call",
    "text": "Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue.",
    "date": "2023-03-17T09:00:35+0000",
    "url": "https://www.nytimes.com/2023/03/17/nyregion/new-york-city-fish-rescue.html",
    "id": "nyt://article/7bce8e93-e6b3-5cb7-ad38-a361fa0d2812"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/03/16/multimedia/16xp-dogpoisoning2/16xp-dogpoisoning2-blog480-v2.jpg",
    "title": "3 Dogs Die After Eating Poisoned Meatballs at a Race in France",
    "text": "The poisonings took place at the French canicross championships, in which people run or cycle while attached to their dogs.",
    "date": "2023-03-16T16:12:57+0000",
    "url": "https://www.nytimes.com/2023/03/16/world/europe/dog-poisoning-france.html",
    "id": "nyt://article/111d57a8-01f0-5bc5-b7ac-d9056ee73b35"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/03/12/magazine/12mag-ethicist-online/12mag-ethicist-online-blog480.jpg",
    "title": "Our Relatives Keep Bringing Their Dog Over. How Can We Stop Them?",
    "text": "The magazine’s Ethicist columnist on how to tell loved ones that you don’t love their pet.",
    "date": "2023-03-08T16:30:04+0000",
    "url": "https://www.nytimes.com/2023/03/08/magazine/pets-ethics.html",
    "id": "nyt://article/ad5e4dfb-3387-5fc5-8087-baea15083054"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/02/27/sports/27nba-suns-dogs-dip/27nba-suns-dogs-dip-blog480.jpg",
    "title": "How a Trade Changed Everything for Two N.B.A. Players and Their Dogs",
    "text": "Professional sports can be a tough business. When Mikal Bridges was dealt from the Suns to the Nets, his friend Cam Payne had to give the news to Sonny and Uno.",
    "date": "2023-02-27T05:01:09+0000",
    "url": "https://www.nytimes.com/2023/02/27/sports/basketball/nba-suns-dogs-payne-bridges.html",
    "id": "nyt://article/3282e4e2-702b-5f0c-b24c-07e3be494f83"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/02/23/multimedia/00ukraine-shelter-02-jgvt/00ukraine-shelter-02-jgvt-blog480.jpg",
    "title": "For Ukraine’s Animals, a Home Is Getting Harder to Find",
    "text": "Early in the war, thousands of pets were ferried out of danger, mostly to other European countries. But now adoptions are waning.",
    "date": "2023-02-28T05:00:10+0000",
    "url": "https://www.nytimes.com/2023/02/28/business/economy/ukraine-war-animals.html",
    "id": "nyt://article/9a1f03cd-a7a8-5afb-8dcc-cb5edeefb2f1"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/02/21/multimedia/00ukraine-business-01-mjgv/00ukraine-business-01-mjgv-blog480.jpg",
    "title": "How One Ukrainian Company Survived, and Thrived, Through a Year of War",
    "text": "For Kormotech and its 1,300 employees, Russia’s invasion disrupted everything. After nimble decision-making and good fortune, sales are up, providing Ukraine with much-needed tax revenue.",
    "date": "2023-02-23T05:00:10+0000",
    "url": "https://www.nytimes.com/2023/02/23/business/economy/ukraine-company-kormotech.html",
    "id": "nyt://article/d7f60f7b-30a7-54ae-9926-d3f3c3b3ea30"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/02/04/multimedia/00xp-high-dogs-01-pmgh/00xp-high-dogs-01-pmgh-blog480.jpg",
    "title": "Nausea, Wobbling, Confusion: Dogs Are Getting Sick From Discarded Weed",
    "text": "In places where recreational use is legal, dogs are getting sick from eating the remains of joints and other cannabis products, veterinarians and poison-control centers say.",
    "date": "2023-02-13T14:02:29+0000",
    "url": "https://www.nytimes.com/2023/02/13/nyregion/dogs-weed-nyc.html",
    "id": "nyt://article/9cda24bb-5520-587b-97aa-039cd981ea91"
  },
  {
    "imgUrl": "https://www.nytimes.com/images/2023/02/09/multimedia/09santos-checks-jvzb/09santos-checks-jvzb-blog480.jpg",
    "title": "George Santos, Puppies and Bad Checks: How a Theft Charge Got Expunged",
    "text": "Mr. Santos was able to get a criminal theft charge in Pennsylvania dismissed, after he told the police that someone had stolen his checkbook.",
    "date": "2023-02-10T02:20:33+0000",
    "url": "https://www.nytimes.com/2023/02/09/nyregion/george-santos-checks-amish.html",
    "id": "nyt://article/f169d0fa-b6f0-5bc3-a1cd-2cd4ecef1e8a"
  }
]

const News = () => {
    useEffect(() => {
        const test = data[3].date;
        const dateObj = dateFormat(test, "dd/mm/yyyy");
        console.log(dateObj)
}, [])
    return (
        <NewsSection>
            <HeroTitle>News</HeroTitle>
            <NewsSearchForm>
                <SearchInputNews type="text" placeholder="Search" />
                <button>S</button>
            </NewsSearchForm>
            <NewsList>
                {data.map(({ imgUrl, title, text, date, url, id }) => (
                <li key={id}>
                    <NewsCardContainer>
                        <NewsCardTopLine />
                        <NewsCardImage src={imgUrl} alt="newsImg" />
                            <NewsCardContentWrapper>
                                <NewsCardTextWrapper>
                                <NewsCardTitle>{ title }</NewsCardTitle>
                                <NewsCardSubTitle>{text}</NewsCardSubTitle>
                                </NewsCardTextWrapper>
                            <NewsCardFooter>
                                <li>
                                        <NewsCardFooterDate>{dateFormat(date, "dd/mm/yyyy")}</NewsCardFooterDate>
                                </li>
                                <li>
                                    <NewsCardFooterLink href={url}>Read more</NewsCardFooterLink>
                                </li>
                            </NewsCardFooter>
                        </NewsCardContentWrapper>
                    </NewsCardContainer>
                </li>
                ))}
            </NewsList>
        </NewsSection>
    )
}

export default News;