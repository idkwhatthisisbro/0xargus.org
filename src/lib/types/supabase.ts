export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
<<<<<<< HEAD
          bot_subscriber: boolean | null
          created_at: string
          email: string | null
          email_verified: boolean | null
          email_verified_at: string | null
          id: number
          phone: string | null
          phone_verified: boolean | null
          phone_verified_at: string | null
=======
          created_at: string
          email: string | null
          email_confirmed_at: string | null
          id: string
          phone: string | null
          phone_confirmed_at: string | null
          phone_verified: boolean | null
          tg_bot_subscriber: boolean | null
>>>>>>> ed0a20cbbd33bbcc18a048621dde15fd00f0ea7c
          tg_id: number | null
          wallet: string | null
        }
        Insert: {
<<<<<<< HEAD
          bot_subscriber?: boolean | null
          created_at?: string
          email?: string | null
          email_verified?: boolean | null
          email_verified_at?: string | null
          id?: number
          phone?: string | null
          phone_verified?: boolean | null
          phone_verified_at?: string | null
=======
          created_at?: string
          email?: string | null
          email_confirmed_at?: string | null
          id: string
          phone?: string | null
          phone_confirmed_at?: string | null
          phone_verified?: boolean | null
          tg_bot_subscriber?: boolean | null
>>>>>>> ed0a20cbbd33bbcc18a048621dde15fd00f0ea7c
          tg_id?: number | null
          wallet?: string | null
        }
        Update: {
<<<<<<< HEAD
          bot_subscriber?: boolean | null
          created_at?: string
          email?: string | null
          email_verified?: boolean | null
          email_verified_at?: string | null
          id?: number
          phone?: string | null
          phone_verified?: boolean | null
          phone_verified_at?: string | null
=======
          created_at?: string
          email?: string | null
          email_confirmed_at?: string | null
          id?: string
          phone?: string | null
          phone_confirmed_at?: string | null
          phone_verified?: boolean | null
          tg_bot_subscriber?: boolean | null
>>>>>>> ed0a20cbbd33bbcc18a048621dde15fd00f0ea7c
          tg_id?: number | null
          wallet?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
<<<<<<< HEAD
      [_ in never]: never
=======
      create_new_user: {
        Args: {
          email: string
        }
        Returns: {
          created_at: string
          email: string | null
          email_confirmed_at: string | null
          id: string
          phone: string | null
          phone_confirmed_at: string | null
          phone_verified: boolean | null
          tg_bot_subscriber: boolean | null
          tg_id: number | null
          wallet: string | null
        }
      }
>>>>>>> ed0a20cbbd33bbcc18a048621dde15fd00f0ea7c
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
