import FeedCard from "@/components/feed/feed-card";
import TweetCard from "@/components/post-tweet/tweet-card";

export default function Home() {
    return (
        <main className="mt-12 sm:mt-0">
            <TweetCard />
            <FeedCard />
        </main>
    );
}
