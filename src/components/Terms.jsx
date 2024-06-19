import React from "react";
import './terms.css';

import termsImage from '../assets/terms.png'

const Terms = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="rounded-md about-title text-4xl text-center italic font-bold p-2 mb-8 mt-[100px] bg-gradient-to-r from-green-500">Terms of Service</h1>
                    <p className="mb-4">
                        Welcome to our Terms of Service page! By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                    </p>
                    <p className="mb-4">
                        The following terms apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center">
                    <img
                        src={termsImage}
                        alt="Terms"
                        className="rounded-lg"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="flex flex-col justify-center">
                    <img
                        src="https://d1n03xfl93cx9q.cloudfront.net/wp-content/uploads/2022/09/what-is-the-future-of-IT-managed-services.jpg"
                        alt="Usage"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <h2 className="rounded-md about-title text-2xl text-center italic font-semibold bg-gradient-to-r from-green-500">Usage of Service</h2>
                    <p className="mt-8 mb-4">
                        By using our services, you agree not to misuse them. Misuse includes, but is not limited to, the following actions:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Attempting to access, tamper with, or use non-public areas of the service.</li>
                        <li>Interfering with or disrupting the access of any user, host, or network.</li>
                    </ul>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                    <h2 className="rounded-md about-title text-2xl text-center italic font-semibold bg-gradient-to-r from-green-500 mb-8">User Responsibilities</h2>
                    <p className="mb-4">
                        As a user of our services, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Ensuring the security of your personal information.</li>
                        <li>Notifying us immediately of any unauthorized use of your account.</li>
                        <li>Compliance with applicable laws and regulations.</li>
                        <li>Compliance with applicable laws and regulations.</li>
                        <li>Ensuring the security of your personal information.</li>
                        <li>Notifying us immediately of any unauthorized use of your account.</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center">
                    <img
                        src="https://img.freepik.com/premium-photo/business-team-collaboration-showing-unity-with-their-hands-stacked-together_49071-4483.jpg?w=1380"
                        alt="User Responsibilities"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="flex flex-col justify-center">
                    <img
                        src="https://termshub.io/v3/assets/images/products/privacy_policy_hero.svg"
                        alt="Changes to Policy"
                        className="rounded-lg"
                    />
                </div>
                <div>
                    <h2 className="rounded-md about-title text-2xl text-center italic font-semibold bg-gradient-to-r from-green-500 mb-8">Changes to Terms</h2>
                    <p className="mb-4">
                        We reserve the right to modify these terms at any time. You should check this page periodically for changes. Your continued use of the service after any changes to these terms will be considered acceptance of those changes.
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="rounded-md about-title text-2xl text-center italic font-semibold bg-gradient-to-r from-green-500 mb-8">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about these Terms, please contact us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    );
}

export default Terms;
