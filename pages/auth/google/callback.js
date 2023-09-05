import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/utils/supabase';

export default function Callback() {
    const router = useRouter();

    useEffect(() => {
        const handleCallback = async () => {
            const { data, error } = await supabase.auth.getSession();

            if (error) {
                console.error("Authentication error:", error.message);
            } else {
                const session = data.session;
                if (session) {
                    // Successfully authenticated
                    const user = session.user;
                    console.log("Authenticated user:", user);
                    router.push('/Main'); // Redirect to homepage after successful login
                } else {
                    // Session is null, not authenticated
                    console.error("Not authenticated.");
                    // Handle this case as needed
                }
            }
        };

        handleCallback();
    }, []);

    return <div>Authenticating...</div>;
}
