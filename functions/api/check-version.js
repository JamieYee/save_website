import semver from 'semver';
import { LATEST_VERSION } from './_config.js';

export async function onRequest(context) {
    const url = new URL(context.request.url);
    let currentVersion = url.searchParams.get('version');

    if (!currentVersion && context.request.method === 'POST') {
        try {
            const body = await context.request.json();
            currentVersion = body.version;
        } catch (e) {
            // Ignore JSON parsing error
        }
    }

    if (!currentVersion) {
        return new Response(JSON.stringify({
            error: "Missing version parameter"
        }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }

    try {
        const hasUpdate = semver.gt(LATEST_VERSION, currentVersion);

        return new Response(JSON.stringify({
            hasUpdate: hasUpdate,
            message: hasUpdate ? "有新版本啦，一定要先去备份数据，再来升级哦。" : "当前已是最新版本"
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid version format" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
