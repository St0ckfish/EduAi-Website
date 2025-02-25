import React from 'react';

const Terms = () => {
    return (
        <main className="max-w-4xl mx-auto py-8 px-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-2">Terms of Service</h1>
                <p className="text-sm text-gray-600 text-center mb-8">Effective Date: July 7, 2024</p>

                <section id="introduction" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                    <p className="mb-4">
                        Welcome to EduAI System. Please read these Terms of Service carefully before using the eduaisystem.com website operated by EduAI System.
                    </p>
                </section>

                <section id="acceptance" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
                    <p className="mb-4">
                        By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><a href="#introduction" className="text-blue-600 hover:underline">Introduction</a></li>
                        <li><a href="#acceptance" className="text-blue-600 hover:underline">Acceptance of Terms</a></li>
                        <li><a href="#accounts" className="text-blue-600 hover:underline">Accounts</a></li>
                        <li><a href="#intellectual-property" className="text-blue-600 hover:underline">Intellectual Property</a></li>
                        <li><a href="#user-content" className="text-blue-600 hover:underline">User Content</a></li>
                        <li><a href="#prohibited-uses" className="text-blue-600 hover:underline">Prohibited Uses</a></li>
                        <li><a href="#termination" className="text-blue-600 hover:underline">Termination</a></li>
                        <li><a href="#governing-law" className="text-blue-600 hover:underline">Governing Law</a></li>
                        <li><a href="#changes" className="text-blue-600 hover:underline">Changes To Terms</a></li>
                        <li><a href="#contact-us" className="text-blue-600 hover:underline">Contact Us</a></li>
                    </ul>
                </section>

                <section id="accounts" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Accounts</h2>
                    <div className="space-y-4">
                        <p>
                            <span className="font-medium">Account Creation:</span> When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                        </p>
                        <p>
                            <span className="font-medium">Account Security:</span> You are responsible for safeguarding the password that you use to access the Service and for any activities under your password.
                        </p>
                    </div>
                </section>

                <section id="intellectual-property" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
                    <p className="mb-4">
                        The Service and its original content, features, and functionality are and will remain the exclusive property of EduAI System and its licensors. The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.
                    </p>
                </section>

                <section id="user-content" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">User Content</h2>
                    <div className="space-y-4">
                        <p>
                            <span className="font-medium">Ownership:</span> You retain ownership of any intellectual property rights that you hold in the content you submit to the Service.
                        </p>
                        <p>
                            <span className="font-medium">License:</span> When you upload or otherwise submit content to our Service, you give EduAI System a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display, and distribute such content.
                        </p>
                    </div>
                </section>

                <section id="prohibited-uses" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Prohibited Uses</h2>
                    <p className="mb-4">
                        You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>In any way that violates any applicable national or international law or regulation.</li>
                        <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional material, including any &apos;junk mail&apos;, &apos;chain letter&apos;, &apos;spam&apos;, or any other similar solicitation.</li>
                        <li>To impersonate or attempt to impersonate EduAI System, an EduAI System employee, another user, or any other person or entity.</li>
                        <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Service, or which, as determined by us, may harm EduAI System or users of the Service, or expose them to liability.</li>
                    </ol>
                </section>

                <section id="termination" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Termination</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            <span className="font-medium">Right to Terminate:</span> We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                        </li>
                        <li>
                            <span className="font-medium">Upon Termination:</span> If you wish to terminate your account, you may simply discontinue using the Service.
                        </li>
                    </ol>
                </section>

                <section id="governing-law" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
                    <p className="mb-4">
                        These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to conflict of law provisions.
                    </p>
                </section>

                <section id="changes" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Changes To Terms</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            <span className="font-medium">Right to Change:</span> We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </li>
                        <li>
                            <span className="font-medium">Continuing to Use:</span> By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                        </li>
                    </ol>
                </section>

                <section id="contact-us" className="mb-4">
                    <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                    <div className="space-y-2">
                        <p><span className="font-medium">Email:</span> contact@expotech.online</p>
                        <p><span className="font-medium">Phone:</span> 0708759037</p>
                        <p><span className="font-medium">Address:</span> Tetouan: Mezanine block B Office n° 4 BOROUJ 16 Avenue des Far N° 873 Tétouan</p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Terms;