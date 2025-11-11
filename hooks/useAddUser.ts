"use client"

import { useState } from "react"
import { supabase } from "./supabase-client"
import type { User } from "./types"

export function useCreateUser() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const createUser = async (user: User) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          email: user.email,
          first_name: user.firstName,
          last_name: user.lastName,
        },
      ])
      .select()
      .single()

    if (error) {
      setError(error.message)
    } else {
      setSuccess(true)
    }

    setLoading(false)
    return data
  }

  return { createUser, loading, error, success }
}
