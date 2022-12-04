import { memo } from "react";

const Footer = () => {
    return (
        <div className="bg-black px-4 py-3 flex justify-between">
            <span className="font-medium">Copyright © 2022
                <a href="https://github.com/onehitdragon" target="_blank" rel="noreferrer"
                    className="hover:text-red-400 transition-all"
                    > https://github.com/onehitdragon</a>
            </span>
            <ul className="flex items-center">
                <a href="https://discord.gg/rq92vcsV" target="_blank" rel="noreferrer" className="w-6 h-6 cursor-pointer mr-2">
                    <img alt="error" src="/icon/discord.png" />
                </a>
                <a href="https://github.com/onehitdragon" target="_blank" rel="noreferrer" className="w-6 h-6 cursor-pointer mr-2">
                    <img alt="error" src="/icon/github.png" />
                </a>
                <a href="https://www.youtube.com/channel/UClN-6RYy1Dvr1eAUTqn8HgQ" target="_blank" rel="noreferrer" className="w-6 h-6 cursor-pointer mr-2">
                    <img alt="error" src="/icon/youtube.png" />
                </a>
                <a href="https://m.facebook.com/anh.hyvong/" target="_blank" rel="noreferrer" className="w-6 h-6 cursor-pointer">
                    <img alt="error" src="/icon/facebook.png" />
                </a>
            </ul>
        </div>
    );
}

export default memo(Footer);