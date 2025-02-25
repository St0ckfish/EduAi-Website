import React from 'react';

const AccountDeletion = () => {
    return (
        <main className="max-w-4xl mx-auto py-8 px-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Account Deletion Request</h1>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><a href="#how-to-request" className="text-blue-600 hover:underline">How to Request Account Deletion</a></li>
                        <li><a href="#steps" className="text-blue-600 hover:underline">Steps to Delete Your Account</a></li>
                        <li><a href="#considerations" className="text-blue-600 hover:underline">Important Considerations</a></li>
                        <li><a href="#contact-us" className="text-blue-600 hover:underline">Contact Us</a></li>
                    </ul>
                </section>

                <section id="how-to-request" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">How to Request Account Deletion</h2>
                    <p className="mb-4">
                        We understand that you may want to delete your account and all associated data from our EDU AI System. 
                        To ensure your privacy and data security, we have made the account deletion process straightforward and secure.
                    </p>
                </section>

                <section id="steps" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Steps to Delete Your Account</h2>
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-medium text-lg mb-2">1. Submit a Deletion Request</h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Please email us at <a href="mailto:contact@expotech.online" className="text-blue-600 hover:underline">contact@expotech.online</a> with the subject line &apos;Account Deletion Request.&apos;</li>
                                <li>In the body of the email, include your full name, registered email address, and a brief explanation of your request.</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-medium text-lg mb-2">2. Verification</h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>To ensure the security of your data, we may need to verify your identity before processing your request.</li>
                                <li>You might be asked to confirm some details or provide additional information.</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-medium text-lg mb-2">3. Processing Your Request</h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Once your request is verified, we will begin the deletion process. This process typically takes up to 10 business days.</li>
                                <li>Upon completion, you will receive a confirmation email informing you that your account and data have been permanently deleted.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="considerations" className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Important Considerations</h2>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <span className="font-medium">Irreversibility:</span> Please note that account deletion is permanent and cannot be undone. Once your account is deleted, all associated data, including your profile information, academic records, and any personalized settings, will be permanently removed from our system.
                            </li>
                            <li>
                                <span className="font-medium">Alternative:</span> If you are experiencing issues with our service, or have concerns, please reach out to our support team. We may be able to resolve your concerns without the need to delete your account.
                            </li>
                        </ol>
                    </div>
                </section>

                <section id="contact-us" className="mb-4">
                    <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions or need assistance with the account deletion process, please do not hesitate to contact us at:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-2">
                            <p><span className="font-medium">Email:</span> <a href="mailto:contact@expotech.online" className="text-blue-600 hover:underline">contact@expotech.online</a></p>
                            <p><span className="font-medium">Phone:</span> 0708759037</p>
                            <p><span className="font-medium">Address:</span> Tetouan: Mezanine block B Office n° 4 BOROUJ 16 Avenue des Far N° 873 Tétouan</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AccountDeletion;