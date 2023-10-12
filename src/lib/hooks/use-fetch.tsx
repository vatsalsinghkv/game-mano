'use client';

import axios from '@/lib/services/axios';
import { useEffect, useState } from 'react';

export default function useFetch<T>(url: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(url);
        setData(data.data);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    })();

    return () => {
      setLoading(true);
      setError(null);
    };
  }, [url]);

  return { loading, error, data };
}
