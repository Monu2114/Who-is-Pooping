"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [clicked, setClick] = useState(false);
  const user_id = "monu_keys";
  const handleClick = async () => {
    if (!clicked) {
      setClick(true);
      const { data, error } = await supabase.from("poop_sessions").insert({
        started_at: new Date().toISOString(),
        location: "Hyderabad",
        user_id: user_id,
      });
      if (error) {
        console.error("Error inserting poop session:", error.message);
        alert("Failed to insert 💩: " + error.message);
      } else {
        console.log("Inserted poop session ✅", data);
      }
    } else setClick(false);
  };
  return (
    <div className="min-h-screen mt-12">
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 border-2 p-6 border-black items-center max-w-xs rounded-xl">
          <Image src="/poop.png" alt="Poop" width={120} height={150} />
          <Button
            className="p-6 text-xl font-bold border-2 border-black "
            variant="secondary"
            onClick={handleClick}
          >
            I am pooping now
          </Button>
        </div>
      </div>
    </div>
  );
}
