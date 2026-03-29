"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from "lucide-react";

type Step = { title: string; body: string; tip?: string };

type Device = {
  id: string;
  name: string;
  subtitle: string;
  appName: string;
  appUrl: string;
  steps: Step[];
};

const devices: Device[] = [
  {
    id: "firestick",
    name: "Amazon Firestick",
    subtitle: "Fire TV Stick / Cube / 4K",
    appName: "IPTV Smarters Pro",
    appUrl: "https://www.amazon.co.uk/",
    steps: [
      {
        title: "Enable Apps from Unknown Sources",
        body: 'Go to Settings → My Fire TV → Developer Options and turn on "Apps from Unknown Sources" and "ADB Debugging".',
        tip: "This only needs to be done once.",
      },
      {
        title: "Install Downloader",
        body: 'Search for "Downloader" in the Amazon App Store and install it. This lets you sideload any APK onto your Firestick.',
      },
      {
        title: "Download IPTV Smarters Pro",
        body: 'Open Downloader and enter the URL for the IPTV Smarters Pro APK. Alternatively, search for "IPTV Smarters" directly in the App Store if available in your region.',
      },
      {
        title: "Open IPTV Smarters & Add Playlist",
        body: 'Launch the app, tap "Add User" → "Load Your Playlist or File/URL". Select "M3U URL" and paste your M3U link, then give your playlist a name.',
        tip: "Your M3U link is sent to you after purchase via email.",
      },
      {
        title: "Start Watching",
        body: "Your channels will load automatically. Browse by category, search for a channel, or go to Live TV. Enjoy!",
      },
    ],
  },
  {
    id: "smarttv",
    name: "Smart TV",
    subtitle: "Samsung, LG, Sony & others",
    appName: "Smart IPTV / SSIPTV",
    appUrl: "https://samsung.com/",
    steps: [
      {
        title: "Install Smart IPTV from App Store",
        body: "Open your TV's app store (Samsung Smart Hub / LG Content Store) and search for 'Smart IPTV' or 'SSIPTV'. Install it for free.",
        tip: "If not found in the store, use a USB stick to sideload the app.",
      },
      {
        title: "Note Your TV's MAC Address",
        body: "Open Smart IPTV — on the welcome screen you'll see a MAC address. Make a note of it, you'll need it to register your playlist.",
      },
      {
        title: "Register Your M3U on the Website",
        body: "Visit siptv.eu (for Smart IPTV) in a browser, enter your TV MAC address and paste your M3U URL, then click Send.",
      },
      {
        title: "Reload the App on Your TV",
        body: "Go back to your TV and reload the Smart IPTV app. Your channels should now appear. Press the menu button to switch between Live, Movies, and Series.",
        tip: "If channels don't appear, press and hold the back button to reload the playlist.",
      },
    ],
  },
  {
    id: "android",
    name: "Android Device",
    subtitle: "Android Phone, Tablet & TV Box",
    appName: "TiviMate",
    appUrl: "https://play.google.com/",
    steps: [
      {
        title: "Install TiviMate from Play Store",
        body: "Open Google Play Store, search for 'TiviMate IPTV Player' and install it. It's free with optional premium upgrade.",
      },
      {
        title: "Open TiviMate & Add Playlist",
        body: 'Launch TiviMate, tap "Add Playlist" then "M3U Playlist". Enter your M3U URL and tap "Next".',
        tip: "For Xtream Codes, choose 'Xtream Codes API' and enter your portal URL, username, and password.",
      },
      {
        title: "Name Your Playlist",
        body: "Give your playlist a name (e.g. BritishIPTV) and tap 'Add'. TiviMate will download all your channels — this may take a minute.",
      },
      {
        title: "Browse & Watch",
        body: "Use the sidebar to browse Live TV, Movies, and Series. You can favourite channels, set up a programme guide (EPG), and customise the layout.",
      },
    ],
  },
  {
    id: "ios",
    name: "iPhone & iPad",
    subtitle: "iOS 14 and above",
    appName: "GSE Smart IPTV",
    appUrl: "https://apps.apple.com/",
    steps: [
      {
        title: "Download GSE Smart IPTV",
        body: "Open the App Store, search for 'GSE Smart IPTV' and install it. It's free with an optional pro upgrade.",
      },
      {
        title: "Add Your M3U Playlist",
        body: "Open the app and tap the menu (≡) → Remote Playlists → the '+' icon → 'Add M3U URL'. Enter a name and paste your M3U link.",
        tip: "Alternatively use 'Add Xtream Codes API' if you have portal credentials.",
      },
      {
        title: "Load the Playlist",
        body: "Tap 'Add' and the app will fetch your channels. This may take 30–60 seconds depending on your connection.",
      },
      {
        title: "Watch Your Channels",
        body: "Tap on any channel group, then select a channel to start streaming. Use the EPG button to view programme guide.",
      },
    ],
  },
  {
    id: "mag",
    name: "MAG Box",
    subtitle: "MAG 250, 254, 322, 410 & others",
    appName: "Built-in Portal",
    appUrl: "",
    steps: [
      {
        title: "Find Your MAG Box MAC Address",
        body: "Power on your MAG box. On the home screen or in Settings → System Information you'll find the MAC address (format: AA:BB:CC:DD:EE:FF).",
        tip: "Send us this MAC address when ordering so we can register your subscription.",
      },
      {
        title: "Enter the Portal URL",
        body: "Go to Settings → System Settings → Servers → Portals. In 'Portal 1 URL' enter the portal URL we provide you after purchase.",
      },
      {
        title: "Save & Reboot",
        body: "Save your settings and restart the MAG box. It will connect to our portal automatically on startup.",
      },
      {
        title: "Browse Channels",
        body: "Use the remote to navigate the channel list. Press OK to watch a channel. Use the EPG button for the programme guide.",
        tip: "If you see 'Incorrect STB subscription' contact support — your MAC address may need re-registering.",
      },
    ],
  },
  {
    id: "windows",
    name: "Windows PC",
    subtitle: "Windows 10 & 11",
    appName: "VLC or IPTV Smarters",
    appUrl: "https://www.videolan.org/",
    steps: [
      {
        title: "Download VLC Media Player",
        body: "Download and install VLC from videolan.org if you don't already have it. It's free and supports M3U playlists natively.",
      },
      {
        title: "Open Network Stream",
        body: "In VLC, go to Media → Open Network Stream (Ctrl+N). Paste your M3U URL and click 'Play'.",
        tip: "VLC will load all channels as a playlist. This is the quickest method.",
      },
      {
        title: "Alternatively: Use IPTV Smarters for Windows",
        body: "Download IPTV Smarters from their official website for a full IPTV experience with EPG, catch-up, and VOD browsing.",
      },
      {
        title: "Add Your Credentials",
        body: "In IPTV Smarters, click 'Add User' and choose M3U URL or Xtream Codes. Enter your subscription details and load your channels.",
      },
    ],
  },
];

function StepItem({ step, index, total }: { step: Step; index: number; total: number }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {index + 1}
        </div>
        {index < total - 1 && <div className="w-px flex-1 bg-white/10 mt-2" />}
      </div>
      <div className={`pb-8 ${index === total - 1 ? "pb-0" : ""}`}>
        <h3 className="text-white font-semibold mb-1">{step.title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{step.body}</p>
        {step.tip && (
          <p className="mt-2 text-xs text-yellow-400/80 bg-yellow-400/10 border border-yellow-400/20 rounded-lg px-3 py-2">
            💡 {step.tip}
          </p>
        )}
      </div>
    </div>
  );
}

export default function SetupClient() {
  const [activeId, setActiveId] = useState(devices[0].id);
  const active = devices.find((d) => d.id === activeId)!;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-white/5 pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-zinc-500 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronLeft size={14} /> Back to Home
          </Link>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Setup Guide
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Get started in minutes
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Choose your device below for a step-by-step guide. No technical knowledge required.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Device selector sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium mb-3">
              Select Device
            </p>
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {devices.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveId(d.id)}
                  className={`flex-shrink-0 text-left px-4 py-3 rounded-xl text-sm transition-all ${
                    activeId === d.id
                      ? "bg-amber-500 text-white font-semibold"
                      : "bg-[#111111] text-zinc-400 hover:text-white hover:bg-[#1a1a1a]"
                  }`}
                >
                  <span className="block font-medium">{d.name}</span>
                  <span className={`text-xs ${activeId === d.id ? "text-amber-100" : "text-zinc-600"}`}>
                    {d.subtitle}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Guide content */}
          <main className="flex-1 min-w-0">
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8">
              {/* Device header */}
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">{active.name}</h2>
                  <p className="text-zinc-400 text-sm mt-0.5">{active.subtitle}</p>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium px-3 py-1.5 rounded-full flex-shrink-0">
                  <CheckCircle2 size={13} />
                  Supported
                </div>
              </div>

              {/* Recommended app */}
              <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-4 flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-zinc-500 text-xs mb-0.5">Recommended App</p>
                  <p className="text-white font-semibold">{active.appName}</p>
                </div>
                {active.appUrl && (
                  <a
                    href={active.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors flex-shrink-0"
                  >
                    Download <ExternalLink size={13} />
                  </a>
                )}
              </div>

              {/* Steps */}
              <div>
                {active.steps.map((step, i) => (
                  <StepItem key={i} step={step} index={i} total={active.steps.length} />
                ))}
              </div>

              {/* Nav buttons */}
              <div className="flex justify-between mt-10 pt-6 border-t border-white/5">
                <button
                  onClick={() => {
                    const idx = devices.findIndex((d) => d.id === activeId);
                    if (idx > 0) setActiveId(devices[idx - 1].id);
                  }}
                  disabled={devices[0].id === activeId}
                  className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={16} /> Previous
                </button>
                <button
                  onClick={() => {
                    const idx = devices.findIndex((d) => d.id === activeId);
                    if (idx < devices.length - 1) setActiveId(devices[idx + 1].id);
                  }}
                  disabled={devices[devices.length - 1].id === activeId}
                  className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Still stuck CTA */}
            <div className="mt-6 bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-semibold">Still need help?</p>
                <p className="text-zinc-400 text-sm">Our team will set it up for you — free of charge.</p>
              </div>
              <a
                href="https://wa.me/212707711512?text=Hi%2C%20I%20need%20help%20setting%20up%20my%20IPTV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                WhatsApp Support
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
