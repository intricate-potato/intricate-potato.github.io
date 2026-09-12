# Some CI/serverless build containers (e.g. Vercel) don't set a UTF-8 locale (LANG/LC_ALL),
# so Ruby falls back to US-ASCII as the default external encoding. Jekyll/Liquid then raises
# "invalid byte sequence in US-ASCII" as soon as any source file (bibliography abstracts,
# author names, etc.) contains a non-ASCII character. Forcing UTF-8 here, before content is
# read, avoids depending on the host's locale configuration.
Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8
