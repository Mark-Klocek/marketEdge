import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

const navigationLink =
    'rounded-full border border-current/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-[#231c30] hover:text-[#f8f1e5] focus-visible:outline-2 focus-visible:outline-offset-4 dark:hover:bg-[#f8f1e5] dark:hover:text-[#231c30]';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <div className="min-h-dvh bg-[#f8f1e5] text-[#231c30] dark:bg-[#231c30] dark:text-[#f8f1e5]">
            <Head title="marketEdge Coming Soon" />

            <div className="mx-auto flex min-h-dvh max-w-7xl flex-col px-6 sm:px-10 lg:px-16">
                <header className="flex items-center justify-between gap-3 border-b border-current/20 py-5">
                    <span
                        aria-hidden="true"
                        className="size-7 shrink-0 rotate-45 rounded-t-full bg-[#6442aa] dark:bg-[#c4adf3]"
                    />

                    <nav
                        aria-label="Account"
                        className="flex flex-wrap justify-end gap-2"
                    >
                        {auth.user ? (
                            <Link href={dashboard()} className={navigationLink}>
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href={login()} className={navigationLink}>
                                    Log in
                                </Link>
                                <Link
                                    href={register()}
                                    className={navigationLink}
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <main className="grid flex-1 content-center items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.13fr_1fr] lg:gap-14">
                    <section className="flex flex-col items-start gap-6">
                        <h1 className="flex flex-col gap-4 font-serif leading-[0.85] tracking-[-0.075em]">
                            <span className="text-[clamp(3rem,10vw,8rem)] lg:text-[clamp(4.5rem,8.3vw,8rem)]">
                                marketEdge
                            </span>
                            <span className="text-[clamp(2.5rem,7vw,5.75rem)] text-[#6442aa] italic dark:text-[#c4adf3]">
                                coming soon.
                            </span>
                        </h1>
                        <div
                            aria-hidden="true"
                            className="h-px w-16 bg-current"
                        />
                    </section>

                    <div
                        aria-hidden="true"
                        className="relative isolate aspect-[6/5] overflow-hidden bg-[#b8a0e8]"
                    >
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_23px,#30214b25_23px_24px),repeating-linear-gradient(90deg,transparent_0_23px,#30214b25_23px_24px)]" />
                        <div className="absolute top-[11%] right-[10%] aspect-square w-[34%] rounded-full bg-[#f8ad77]" />
                        <div className="absolute bottom-[-38%] left-[-13%] aspect-square w-[94%] rotate-[-28deg] rounded-t-[50%] bg-[#352351]" />
                        <div className="absolute right-[-8%] bottom-[-37%] aspect-square w-[84%] rotate-45 rounded-t-full bg-[#754dbc]" />
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(145deg,transparent_0_5px,#fff2_5px_6px)] mix-blend-soft-light" />
                        <div className="absolute inset-[5%] border border-[#fff6]" />
                    </div>
                </main>
            </div>
        </div>
    );
}
